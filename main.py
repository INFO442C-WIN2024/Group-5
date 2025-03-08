from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uwtools
import logging
from enum import Enum
import uvicorn

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


app = FastAPI(
    title="UW Majors & Minors API",
    description="API to fetch majors and minors for University of Washington campuses (Seattle, Bothell, Tacoma).",
    version="1.0.0",
)


class CampusEnum(str, Enum):
    SEATTLE = "Seattle"
    BOTHELL = "Bothell"
    TACOMA = "Tacoma"

@app.get("/majors/{campus}", summary="Get majors for a UW campus", response_model=dict)
async def get_majors(campus: CampusEnum):
    """
    Fetches the list of majors available at a given UW campus.

    :param campus: The name of the campus ('Seattle', 'Bothell', 'Tacoma').
    :return: A JSON response containing the list of majors for the given campus.
    """
    logger.info(f"Fetching majors for campus: {campus}")
    
    try:
        departments_data = uwtools.departments(campuses=[campus.value], struct='dict', flatten='department')
    except Exception as e:
        logger.error(f"Error fetching majors: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")

    return {"campus": campus.value, "majors": departments_data}

@app.get("/buildings/{campus}", summary="Get buildings for a UW campus", response_model=dict)
async def get_buildings(campus: CampusEnum):
    """
    Fetches the list of buildings available at a given UW campus.
    
    :param campus: The name of the campus ('Seattle', 'Bothell', 'Tacoma').
    :return: A JSON response containing the list of buildings for the given campus.
    """
    logger.info(f"Fetching buildings for campus: {campus}")
    try:
        # Call the uwtools.buildings method passing the selected campus.
        buildings_data = uwtools.buildings(campuses=[campus.value])
    except Exception as e:
        logger.error(f"Error fetching buildings: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
        
    return {"campus": campus.value, "buildings": buildings_data}

@app.get("/courses/{campus}", summary="Get courses for a UW campus", response_model=dict)
async def get_courses(campus: CampusEnum):
    """
    Fetches the course catalog for the given UW campus, returning only course keys and their names.
    
    :param campus: The campus for which to fetch the course catalog ('Seattle', 'Bothell', 'Tacoma').
    :return: A JSON response containing course keys and their names.
    """
    logger.info(f"Fetching courses for campus: {campus}")
    try:
        # Get the full course catalog
        courses_data = uwtools.course_catalogs(campuses=[campus.value], struct='dict', show_progress=False)
        
        # Create a new dictionary with only course keys and their names
        simplified_courses = {}
        for course_key, course_info in courses_data.items():
            if isinstance(course_info, dict) and 'Course Name' in course_info:
                simplified_courses[course_key] = {
                    'Course Name': course_info['Course Name']
                }
                
    except Exception as e:
        logger.error(f"Error fetching courses: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error fetching data: {str(e)}")
        
    return {"campus": campus.value, "courses": simplified_courses}


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

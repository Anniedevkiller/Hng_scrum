from fastapi import FastAPI, status, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from api.v1.routes import api_version_one
from api.utils import success_response, settings
from api.v1.models import Base
from api.db.database import engine


from fastapi.middleware.cors import CORSMiddleware



origins = [
	"http://localhost:8000"
]


def create_tables():
	Base.metadata.create_all(bind=engine)




create_tables()
app = FastAPI(title=settings.PROJECT_NAME,version=settings.PROJECT_VERSION)
app.include_router(api_version_one)



app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    # Log the details for debugging purposes
    print(f"Validation error on request {request.url}: {exc}")
    
     # Customize the response content
    errors = []
    for error in exc.errors():
        field = error["loc"][-1]
        message = error["msg"]
        errors.append({ "field": field, "message": message })
        
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "message": "Validation Error",
            "errors": errors,
            "hint": "Check the data format and required fields."
        },
    )


@app.get("/")
def home():
    return success_response(
		status_code=status.HTTP_200_OK,
		message="Hey There👋. Welcome to HNG SCRUM.",
    )


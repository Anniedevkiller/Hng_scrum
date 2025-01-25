from fastapi import FastAPI, status
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

@app.get("/")
def home():
    return success_response(
		status_code=status.HTTP_200_OK,
		message=f"Hey There👋. Welcome to HNG SCRUM.",
    )


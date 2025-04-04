from django.urls import path
from .views import *

urlpatterns = [
    path("companies/", company_list, name="company-list"),
    path("companies/<int:id>/", company_detail, name="company-detail"),
    path("companies/<int:id>/vacancies/", company_vacancies, name="company-vacancies"),
    path("vacancies/", vacancy_list, name="vacancy-list"),
    path("vacancies/<int:id>/", vacancy_detail, name="vacancy-detail"),
    path("vacancies/top_ten/", vacancy_top_ten, name="vacancy-top-ten"),
]

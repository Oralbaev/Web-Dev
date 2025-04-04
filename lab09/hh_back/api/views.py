from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer


# Create your views here.
@api_view(['GET'])
def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def company_detail(request, id):
    try:
        company = Company.objects.get(id = id)  
    except Company.DoesNotExist:
        return Response({'error': 'Компания не найдена'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = CompanySerializer(company)
    return Response(serializer.data)

@api_view(['GET'])
def company_vacancies(request, id):
    try:
        company = Company.objects.get(id = id)
    except Company.DoesNotExist:
        return Response({'error': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
    
    vacancy = company.vacancies.all()
    serializer = VacancySerializer(vacancy, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def vacancy_list(request):
    vac = Vacancy.objects.all()
    s = VacancySerializer(vac, many=True)
    return Response(s.data)

@api_view(['GET'])
def vacancy_detail(request, id):
    try:
        vac = Vacancy.objects.get(id = id)
    except Company.DoesNotExist:
        return Response({'error': 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
    
    s = VacancySerializer(vac)
    return Response(s.data)

@api_view(['GET'])
def vacancy_top_ten(request):
    vac = Vacancy.objects.order_by('-salary')[:10]
    s = VacancySerializer(vac, many=True)
    return Response(s.data)















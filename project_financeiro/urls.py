from django.contrib import admin
from django.urls import path

from .views import dashboard, dashboard_despesas, dashboard_local

urlpatterns = [
    path("", dashboard, name="dashboard"),  # type: ignore
    path("despesas/", dashboard_despesas, name="despesas"),  # type: ignore
    path("Local/", dashboard_local, name="local"),  # type: ignore
]

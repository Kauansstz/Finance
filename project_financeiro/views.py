from django.shortcuts import render


def dashboard(request):
    return render(request, "pages/main.html")


def dashboard_despesas(request):
    return render(request, "pages/panel_despesas.html")

def dashboard_local(request):
    return render(request, "pages/panel_local.html")

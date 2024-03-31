from rest_framework.views import APIView
from main import models
from main import serializers



class GetWindowsFromDay(APIView):
    def get(self, request, *args, **kwargs):
        day, month, year = request.GET.get("day"), request.GET.get("month"), request.GET.get("year")
        date = models.Date.objects.filter(date__month=month, date__year=year, date__day=day)
        windows = date.windows.all()
        rows_count = date.windows_in_floor
        columns_count = 4
        return {"rowsCount": rows_count, "columnsCount": columns_count, "data": serializers.Window_serializer(windows, many=True)}


# class 
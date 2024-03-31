from django.db import models



class Date(models.Model):
    date = models.DateField()
    windows_quantity = models.IntegerField()
    windows_in_floor = models.IntegerField()


class Room(models.Model):
    room_number = models.IntegerField()
    is_light = models.BooleanField()


class Window(models.Model):
    window_number = models.IntegerField()
    date_id = models.ForeignKey(to=Date)
    is_light = models.BooleanField()
    floor = models.IntegerField()
    room_id  = models.ForeignKey(to=Room)
from django.db import models



class Date(models.Model):
    date = models.DateField()
    windows_in_floor = models.IntegerField()


class Room(models.Model):
    room_number = models.IntegerField()
    is_light = models.BooleanField()


class Window(models.Model):
    window_number = models.IntegerField()
    date_id = models.ForeignKey(to=Date, verbose_name="windows")
    is_light = models.BooleanField()
    floor = models.IntegerField()
    room = models.ForeignKey(to=Room)

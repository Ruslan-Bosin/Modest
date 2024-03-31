from app import db


class Date(db.model):
    id = db.Column(db.Integer(), primary_key=True)
    date = db.Column(db.Date())
    windows_quntity = db.Column(db.Integer())
    windows_on_floor = db.Column(db.Integer())
    room_id = db.Column(db.Integer(), db.ForeignKey('room.id'))
    window_id = db.Column(db.Integer(), db.ForeignKey('window.id'))

class Room(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    is_light = db.Column(db.Boolean())


class Window(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    is_light = db.Column(db.Boolean())
    floor = db.Column(db.Integer())
    room_id = db.Column(db.Integer(), db.ForeignKey('room.id'))
    date_id = db.Column(db.Integer(), db.ForeignKey('room.id'))

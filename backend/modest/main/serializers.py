from rest_framework import serializers


class Window_serializer(serializers.Serializer):

    def to_representation(self, instance):
        return {"id": instance.window_number, "colored": instance.is_light, "roomNumber": instance.room.room_number}

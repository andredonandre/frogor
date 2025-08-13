from rest_framework import serializers

from faq.models import Faq

class FaqSerializer(serializers.ModelSerilizer):

    class Meta:
        model = Faq
        fields = ['question','answer', 'created','updated', 'id']
        read_only_fields = ['created','updated', 'id']
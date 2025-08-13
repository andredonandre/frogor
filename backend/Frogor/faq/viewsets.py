from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from faq.models import Faq

from faq.serializers import FaqSerializer

class FaqViewSet(viewsets.ModelViewSet):
    queryset = Faq.objects.all()
    serializer_class = FaqSerializer
    permission_classes = [AllowAny]
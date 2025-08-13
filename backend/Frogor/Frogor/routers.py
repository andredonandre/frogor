from rest_framework import routers
from faq.viewsets import FaqViewSet


router = routers.SimpleRouter()

router.register(r'faq', FaqViewSet, basename="faq")

urlpatterns = router.urls
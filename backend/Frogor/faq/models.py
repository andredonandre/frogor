from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid

# Create your models here.
class Faq(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    tags = ArrayField(models.CharField(max_length=200), blank=True)   
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
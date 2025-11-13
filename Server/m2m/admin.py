from django.contrib import admin

# Register your models here.
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'text', 'created_at')
    search_fields = ('name', 'text')
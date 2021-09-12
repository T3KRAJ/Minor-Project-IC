from core.models import Image
from django.contrib import admin
from django.utils.html import format_html

# Register your models here.
class ImageAdmin(admin.ModelAdmin):
    def image_tag(self, obj):
        if obj.picture:
            return format_html('<img src="{}" />'.format(obj.picture.url))

    image_tag.short_description = 'Picture'

    list_display = ["image_tag", "result", "uploaded_on"]
    search_fields = ('result',)
    list_per_page = 20


admin.site.register(Image, ImageAdmin)
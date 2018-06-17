from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from content_api.views import ItemViewSet

router = routers.DefaultRouter()
router.register(r'item', ItemViewSet, base_name='item')

urlpatterns = [
    url(r'^api/', include(router.urls)),
    url(r'^admin/', admin.site.urls),
]

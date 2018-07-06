from django.conf.urls import url
from . import views


urlpatterns = [
    # url(r'^$', views.post_list, name='post_list'),
    url(r'^$', views.index, name='index'),
    url(r'^$', views.index, name='castcrew'),
    url(r'^$', views.index, name='email'),
    url(r'^$', views.index, name='images'),
    url(r'^$', views.index, name='story'),
    url(r'^$', views.index, name='trailer'),
]
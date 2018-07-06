from django.shortcuts import render


def index(request):
    return render(request, 'blog/index.html', {})


def castcrew(request):
    return render(request, 'blog/castcrew.html', {})


def email(request):
    return render(request, 'blog/email.html', {})


def story(request):
    return render(request, 'blog/story.html', {})


def trailer(request):
    return render(request, 'blog/trailer.html', {})




from customers.models import Customer
from customers.serializers import CustomerSerializer
from django.http import JsonResponse, Http404


def customers(request):
    data = Customer.objects.all()
    serializer = CustomerSerializer(data, many=True)
    return JsonResponse({
        "customers": serializer.data
    })


def customer(request, id):
    try:
        data = Customer.objects.get(pk=id)
        serializer = CustomerSerializer(data, many=False)
    except Customer.DoesNotExist:
        raise Http404("Customer does not exist")
    return JsonResponse({
        "customer": serializer.data
    })
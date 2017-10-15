from rest_framework import serializers
from cotizaciones.models import Tamano, TipoPan, AditivosPan, Cubierta, Relleno, Toppings, PreciosExtra

class TamanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tamano
        fields = ('elID','nombre','multiplicador')

class TipoPanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoPan
        fields = ('elID','nombre','precio')

class AditivosPanSerializer(serializers.ModelSerializer):
    class Meta:
        model = AditivosPan
        fields = ('elID','nombre','precio')
        
class CubiertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cubierta
        fields = ('elID','nombre','precio')
    
class RellenoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Relleno
        fields = ('elID','nombre','precio')
        
class ToppingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Toppings
        fields = ('elID','nombre','precio')
        
class PreciosExtraSerializer(serializers.ModelSerializer):
    class Meta:
        model = PreciosExtra
        fields = ('elID','nombre','precio')

class CotizacionesSerializer(serializers.Serializer):
    Tamano = TamanoSerializer(many=True)
    TipoPan = TipoPanSerializer(many=True)
    AditivosPan = AditivosPanSerializer(many=True)
    Cubierta = CubiertaSerializer(many=True)
    Relleno = RellenoSerializer(many=True)
    Toppings = ToppingsSerializer(many=True)
    PreciosExtra = PreciosExtraSerializer(many=True)
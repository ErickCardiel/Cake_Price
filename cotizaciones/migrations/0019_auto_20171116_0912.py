# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-16 09:12
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cotizaciones', '0018_auto_20171116_0911'),
    ]

    operations = [
        migrations.RenameField(
            model_name='relleno',
            old_name='logoRelleno',
            new_name='logRel',
        ),
    ]

# Generated by Django 5.1.3 on 2025-01-17 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0005_medicines_pros'),
    ]

    operations = [
        migrations.AddField(
            model_name='medicines',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='pros',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
    ]

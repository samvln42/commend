# Generated by Django 5.0 on 2024-01-11 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='productid',
            field=models.CharField(max_length=11),
        ),
        migrations.AlterField(
            model_name='note',
            name='storeid',
            field=models.CharField(max_length=11),
        ),
        migrations.AlterField(
            model_name='note',
            name='userid',
            field=models.CharField(max_length=11),
        ),
    ]
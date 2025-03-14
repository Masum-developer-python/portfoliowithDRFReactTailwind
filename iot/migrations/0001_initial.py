# Generated by Django 5.1.3 on 2025-01-13 20:01

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('client_name', models.CharField(max_length=200)),
                ('start_date', models.DateField()),
                ('target_completion', models.DateField()),
                ('total_budget', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0)])),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='ComponentCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='subcategories', to='iot.componentcategory')),
            ],
        ),
        migrations.CreateModel(
            name='ClientComponent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('component_id', models.CharField(max_length=50, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('specifications', models.TextField()),
                ('quantity', models.PositiveIntegerField()),
                ('condition', models.CharField(choices=[('new', 'New'), ('used', 'Used'), ('damaged', 'Damaged'), ('repair', 'Needs Repair')], max_length=20)),
                ('client_reference', models.CharField(blank=True, max_length=100)),
                ('notes', models.TextField(blank=True)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='iot.project')),
            ],
        ),
        migrations.CreateModel(
            name='RequiredComponent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('component_id', models.CharField(max_length=50, unique=True)),
                ('name', models.CharField(max_length=200)),
                ('specifications', models.TextField()),
                ('quantity', models.PositiveIntegerField()),
                ('unit_cost', models.DecimalField(decimal_places=2, max_digits=10)),
                ('supplier', models.CharField(max_length=200)),
                ('lead_time_days', models.PositiveIntegerField()),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('ordered', 'Ordered'), ('received', 'Received'), ('installed', 'Installed')], default='pending', max_length=20)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='iot.componentcategory')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='iot.project')),
            ],
        ),
    ]

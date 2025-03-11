from django.shortcuts import render
from .models import Person

def family_tree(request, person_id):
    person = Person.objects.get(id=person_id)
    ancestors = person.get_ancestors(generations=10)
    r_ancestors = ancestors[::-1]
    ancestors = r_ancestors
    descendants = person.get_descendants(generations=10)
    return render(request, 'genealogy/family_tree.html', {'person': person, 'ancestors': ancestors, 'descendants':descendants})

import json

def get_family_tree_data(request, person_id):
    person = Person.objects.get(id=person_id)
    ancestors = person.get_ancestors(generations=10)
    r_ancestors = ancestors[::-1]
    ancestors = r_ancestors
    descendants = person.get_descendants(generations=10)
    family_data = build_family_tree(person)
    return render(request, 'genealogy/family_tree.html', {'person': person,'ancestors': ancestors, 'descendants':descendants,'family_data': json.dumps(family_data)})

def build_family_tree(person):
    # Create the tree structure (in a simplified way)
    tree = {
        'name': person.name,
        'children': []
    }
    # Add descendants recursively
    for child in person.get_descendants(generations=1):
        child_data = {
            'name': child.name,
            'children': build_family_tree(child).get('children', [])
        }
        tree['children'].append(child_data)
    print(tree)
    return tree

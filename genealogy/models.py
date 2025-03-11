from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=200)
    birth_date = models.DateField(null=True, blank=True)
    death_date = models.DateField(null=True, blank=True)
    father = models.ForeignKey('self', on_delete=models.SET_NULL, null=True,  blank=True,related_name='father_children')
    mother = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='mother_children')

    def __str__(self):
        return self.name

    def get_ancestors(self, generations=3):
        ancestors = []
        if self.father:
            ancestors.append(self.father)
            ancestors.extend(self.father.get_ancestors(generations - 1)[:generations])
        if self.mother:
            ancestors.append(self.mother)
            ancestors.extend(self.mother.get_ancestors(generations - 1)[:generations])
        return ancestors[:generations]
    
    
    def get_descendants(self, generations=10):
        descendants = []
        if generations > 0:
        # Get all children for this person
            children = self.father_children.all() | self.mother_children.all()  # Combine father and mother children)  # Use the related_name 'father_children' or 'mother_children' in the foreign key if needed
            for child in children:
                descendants.append(child)  # Add child to the descendants list
            # Recursively get the descendants of each child
                descendants.extend(child.get_descendants(generations - 1))
        return descendants
    
    # def get_descendants(self, generations=10, level=0, result=None):
    #     if result is None:
    #         result = []  # Initialize list to store levels

    #     if len(result) <= level:
    #         result.append([])  # Ensure the level exists in the result list

    # # Get all children
    #     children = self.father_children.all() | self.mother_children.all()
    
    #     if children:
    #         result[level].extend(children)  # Add children at the current level

    #     # Recursively process children at the next level
    #         for child in children:
    #             child.get_descendants(generations - 1, level + 1, result)

    #     return result


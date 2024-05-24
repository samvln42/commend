from django.db import models

class Note(models.Model):
    storeid = models.CharField(max_length=11)
    productid = models.CharField(max_length=11)
    userid = models.CharField(max_length=11)
    commend = models.TextField()
    rating = models.IntegerField(default=0)

    def __str__(self):
        return f"Note - {self.storeid} - {self.productid} - {self.userid}"
    
    class Meta:
        db_table = "notes"

class RegisterUser(models.Model):
    email = models.CharField(max_length=11)
    code = models.CharField(max_length=11)
    nikname = models.CharField(max_length=11)
    password = models.CharField(max_length=11)

    def __str__(self):
        return f"Note - {self.email} - {self.code} - {self.nikname}"
    
    class Meta:
        db_table = "user"
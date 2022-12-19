from django.db import models

class request(models.Model):
    userName = models.CharField('Имя', max_length = 50)
    contacts = models.CharField('Контакты', max_length=50)

    def __str__(self):
        return self.userName

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'
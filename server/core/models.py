from django.db import models
from keras.preprocessing.image import load_img, img_to_array
from keras.preprocessing import image
import numpy as np
from tensorflow.keras.applications.inception_resnet_v2 import InceptionResNetV2, decode_predictions, preprocess_input
from django.conf import settings


# Create your models here.
class Image(models.Model):
    picture = models.ImageField()
    result = models.CharField(max_length=100, blank=True)
    uploaded_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.result

    def save(self, *args, **kwargs):
        try:
            img = load_img(self.picture.path, target_size=(299, 299))
            img_arr = img_to_array(img)
            to_pred = np.expand_dims(img_arr, axis=0)  # (1,299,299,3)
            prep = preprocess_input(to_pred)
            model = InceptionResNetV2(weights='imagenet')
            prediction = model.predict(prep)
            decoded = decode_predictions(prediction)[0][0][1]
            self.result = str(decoded)
            print('Success')
        except Exception as e:
            print(f"Classification Failed {e}")
        super(Image, self).save(*args, **kwargs)
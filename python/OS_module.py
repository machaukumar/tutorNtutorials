import os

currDir = os.getcwd()
print(currDir)

os.mkdir('sampleDir')

import time

time.sleep(2)


os.rename('sampleDir','sampleDir2')

time.sleep(2)

os.rmdir('sampleDir2')

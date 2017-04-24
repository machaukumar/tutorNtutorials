import urllib.request
import urllib.parse

#x = urllib.request.urlopen('http://google.com/')

#print(x.read())

url = 'https://pythonprogramming.net/'

values = {'s':'basic','submit':'search'}

data = urllib.parse.urlencode(values)
data = data.encode('UTF-8') #byte form of data

req = urllib.request.Request(url,data)
resp = urllib.request.urlopen(req)

respData = resp.read()
print(respData)
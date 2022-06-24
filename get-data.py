import urllib.request
contents = urllib.request.urlopen("http://localhost:4000/data").read()
print(contents)

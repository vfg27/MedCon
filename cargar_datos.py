import requests
import urllib3
urllib3.disable_warnings()
import pandas 



headers = {'Content-type': 'application/json', 'Accept': 'application/json'}

resp = requests.post('https://localhost:8083/citas', json='./datos.json', auth=('Juan', 'patata'), timeout=(2, 5), verify=False )
print(resp)
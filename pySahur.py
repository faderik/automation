# Log responses : https://docs.google.com/forms/d/1D0QSeegGqdJscLY3JxCfKVGem7VtXq3uvT47ei_iajU/edit#responses

import requests
import random
import datetime
from datetime import datetime

urlForLog = 'https://docs.google.com/forms/d/e/1FAIpQLSci5hTGBLs-x4YNY6fSkkIDRmkp-M4hqpj0HPOq34Mh07N4NA/formResponse'
urlForRbtk = 'https://docs.google.com/forms/d/e/1FAIpQLSdLDK-9wFbZVjnVEJpwCHOa-svlaZcWWfc-fIzlYYsCsgoG8Q/formResponse'

yourTeam = 'KRSBI-Beroda IRIS'
minutes = ['00', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
sarans = ['Terimakasih', 'Jos', 'Mantap', '.', '...', 'Oke', 'Alhamdulillah', ' ', 'Makasih', 'Trimakasih', 'Trims']
names = ['Hafiz', 'Taufik Hidayat', 'Azzam Wildan', 'Rama', 'Danen', 'Ian']

def submitLog(yourName) :
    reqBody = {
        'entry.2042940715_year' : '2022',
        'entry.2042940715_month' : '4',
        'entry.1142693049_hour' : '03',
        'entry.1142693049_minute' : random.choice(minutes),
        'entry.2042940715_day' : datetime.today().strftime('%d'),
        'entry.1620124486' : yourName,
        'entry.1894810241' : random.choice(sarans),
        'entry.2060687339' : yourTeam
    }

    return requests.post(
        url= urlForLog, 
        data= reqBody
    )

def submitRbtk(yourName) :
    reqBody = {
        'entry.1474663762_year' : '2022',
        'entry.1474663762_month' : '4',
        'entry.101281000_hour' : '03',
        'entry.101281000_minute' : random.choice(minutes),
        'entry.1474663762_day' : datetime.today().strftime('%d'),
        'entry.1838502861' : yourName,
        'entry.687419860' : random.choice(sarans),
        'entry.1878233469' : yourTeam
    }

    return requests.post(
        url= urlForRbtk, 
        data= reqBody
    )

def main():
    print("Gasssken Bismillah\n\n")

    listNameFile = open('name.txt', 'r')
    for line in listNameFile:
        names.append(line.rstrip())
    print(names)

    for yourName in names:
        logRes = submitLog(yourName)

        if(logRes.status_code == 200):
            print('Log succes for : ' + yourName)

            rbtkRes = submitRbtk(yourName)
            if(rbtkRes.status_code == 200):
                print('Submit succes for : ' + yourName)
            else :
                print('Submit failed for : ' + yourName)
        else :
            print('Log failed !!!')
            break;


if __name__ == "__main__":
    main()

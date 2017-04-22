import csv

with open('example.csv') as csvFile:
    readCSV = csv.reader(csvFile,delimiter=',')
    for row in readCSV:
        print(row)
        print(row[0])

        #exception code
        try:
            row.index('hell')
        except Exception as e:
            print(e)

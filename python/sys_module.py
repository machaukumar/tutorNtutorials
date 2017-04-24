import sys

sys.stderr.write('this is a error message\n')

sys.stderr.flush()

sys.stdout.write('this is a standard text\n')


print(sys.argv)

if len(sys.argv)>1:
    print(sys.argv[1])


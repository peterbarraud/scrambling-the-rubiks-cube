
def main():
    with open(r'scrambles.txt', 'r') as f:
        lines = list(set(['{"scramble":"' + line.strip() + '"}' for line in f if line.strip() != ''])) 
    print(len(lines))
    with open(r'scrambles.json', 'w') as f:
        f.write('[')
        f.write(",".join(lines))
        f.write(']')

if __name__ == '__main__':
    main()
    
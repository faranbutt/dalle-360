from time import strftime


def _writeLog(data: str, person: str = ""):
    with open("Log.txt", "a") as f:
        written_data = "[{}] - {}... - {}".format(
            strftime("%Y-%m-%d %H:%M"),
            data,
            person
        )
        f.write(f'\n{written_data.title()}')


inputLog = input("Log: ")
Person = input("Person: ")
_writeLog(inputLog, person=Person)

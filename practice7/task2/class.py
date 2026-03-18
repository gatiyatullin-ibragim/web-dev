class Lichnost:
    def __init__(self, name, mestoraboty):
        self.name = name
        self.mestoraboty = mestoraboty

    def ktoTyVoin(self):
        return f"Я {self.name}"

    def rod_Deyatelnosti(self):
        return f"Я {self.name} работаю на {self.mestoraboty}"



class Blogger(Lichnost):
    def __init__(self, name, klikuha, mestoraboty):
        super().__init__(name, mestoraboty)
        self.klikuha = klikuha
        self.mestoraboty = mestoraboty

    def pozdorovatsa(self):
        return f"Всем привет с вами {self.klikuha} и я {self.mestoraboty}"

    def byebye(self):
        return f"С вами был {self.klikuha} всем пока"



class Makan(Blogger):
    def __init__(self, name, klikuha, mestoraboty):
        super().__init__(name,klikuha,mestoraboty)
        
    def temka(self):
        return "Братан у меня есть темка"

    def jab(self):
        return"Джэб ушел джэб ушел джет меня укачает Емирэйт"

    def pristegnut(self):
        return"Одеваем барсетку"

    def pozdorovatsa(self):
        return f"Меня зовут Макан по кличке {self.klikuha} место работы: {self.mestoraboty}"



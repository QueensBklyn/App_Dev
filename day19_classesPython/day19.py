"""
Sue Peters
Aug 13:Python classes
"""
print('\n -------class Person -------')
print('\n --------------------------\n')

#create a class: Class name is always capitalized
class MyClass:
    num = 5 
    
#create an object for class MyClass
p1 = MyClass()
print(p1)
print(f'\nObject num ={p1.num}')

#The _init_() function is called automatically every time the class is being used to create new object.

#The self parameter is a referemce to the current instance of the class and is used to access variable that belongs to the class.
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    #object method
    def printObject(self):
        print(f"Hello! my name is {self.name}")

#create an object and initialize values:
person1 = Person("John", 30) 
print(f'Object name ={person1.name}')
print(f'Object age = {person1.age}') 

#printing an object method
print(f'/n{person1.printObject()}')

    #delete properties using del keyword
del person1.name

    #pass statement is used to pass an empty class
class House:
    pass

print(f"print {House}")

print('\n -----class Chair ------')
print(' ----------------------\n')

class Chair:
    #accesible properties
    chair_color ='brown'
    def __init__(self, height, width, length):
           self.height = height
           self.width = width
           self.length = length*2

    # define a method to print result
    def print_result(self):
            print(f'The length of the chari is: {self.length}')    
    
    #pass the height
    def get_height(self):
        return self.height
    
    #pass the accessible property
    def get_color(self):
        return self.chair_color
    
    #update class values
    def set_price(self, price):
        self._price = price #_ makes a private property
  
# initialize an object for class Chair
chair1 =Chair(12, 30, 10)
chair1.print_result()
print(f'The chair height {chair1.get_height()}')
print(f'\nThe chair color is {chair1.chair_color}')
#update the price data
chair1.set_price(25)
print(f'Chair price {chair1._price}')
#print(f'\nVery private width ={chair1._width}')

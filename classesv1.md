#sample UML diagram for CSC102 by Andrew Lucier<br>
#andlucie@uat.edu

Create a diagram with 2 classes. Those classes need 3 attributes, 3 methods<br>
Attributes come before properties or methods<br>
\+ public, \- private, \# protected<br>
```mermaid
    classDiagram
    class Engine{
        -thrust
        -date manufactured
        -manufacturer
        +engineInstall()
        +engineIgnite()
        +engineTest()
    }
 
    class Parachute{
        -material
        -amount
        -reusability
        +parachuteOpen()
        +parachuteDestination()
        +spacecraftSpeed()
    }
```
```mermaid
    classDiagram
    class Shape{
        -length
        -width
        -height
        +getLength()
        +setLength()
        +getWidth()
        +setWidth()
        +getHeight()
        +setHeight()
    }
 
    class ShapeSig{
        -length : int
        -width : int
        -height : int
        +getLength() : int
        +setLength(n : int) : void
        +getWidth() : int
        +setWidth(n : int) : void
        +getHeight() : int
        +setHeight(n : int) : void
    }
```
```mermaid
    classDiagram
    class Superclass{
        
    }
 
    class Subclass1{
        
    }

    class Subclass2{
        
    }

    Superclass <|-- Subclass1
    Superclass <|-- Subclass2
```
import sys
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Personal Finance Assistant")
        self.setGeometry(100, 100, 800, 600)
        label = QLabel("Welcome to Personal Finance Assistant", self)
        label.setGeometry(200, 250, 400, 50)

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
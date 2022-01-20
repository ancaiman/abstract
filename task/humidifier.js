/* Для примера был использован увлажнитель с механической ручкой-крутилкой, 
которая при повороте включает увлажнитель, устанавливает интенсивность увлажнения,
выключает если вернуться в исходное положение */

const log = console.log;

class Humidifier {
  //Конструктор сущности с набором характеристик
  constructor(characteristics) {
    this._model = characteristics.model
    this._color = characteristics.color
    this._maxWaterLevel = characteristics.maxWaterLevel
  }

  //Внутренний интерфейс
  _maxIntensity = 100;
  _maxWaterLevel = 0;
  _intensity = 0;
  _lastCalculatedWaterLevel = 0;
  _waterSensorValue = 1; // Значение Value приходит от сенсора, его логика работы нам неизвестна.
  _timerToCheckWaterSensor = setInterval(() => {this._checkWaterSensor()}, 5000) // Как только увлажнитель включён запускаем таймер для опроса сенсора.

  // Опрашиваем сенсор, если воды нет, выключаем увлажнитель.
  _checkWaterSensor() {
    if (this._waterSensorValue === 0) {
      log(`Нет воды`);
      this.setOff();
    }
  }

  //Таймер который считает сколько воды испарилось, таймер принимает значение для упрощения примера.
  _startTimer(timeInSeconds) {
    let startTime = 0;
    let finishTime = (timeInSeconds * 1000);

    let timeEvaporated = setInterval(() => {
      if (this._waterSensorValue === 0) clearInterval(timeEvaporated);
      if (finishTime === startTime) {
        clearInterval(timeEvaporated);
        log(`Испарилось ${this._lastCalculatedWaterLevel}мл воды`)
      }
      this._lastCalculatedWaterLevel += (this._intensity / 2);

      if (this._lastCalculatedWaterLevel >= (this._maxWaterLevel - 200)) {
        log(`Осталось мало воды`);
      }
      finishTime -= 1000;
    }, 1000)
  }

  //Внешний интерфейс
  //Включение увлажнителя, установка интенсивности.
  setOn(intensity, timeInSeconds) {
    this._intensity = intensity;
    this._startTimer(timeInSeconds)
    return log(`Увлажнитель включён`);
  }

  //Выключение увлажнителя
  setOff() {
    clearInterval(this._timerToCheckWaterSensor);
    this._intensity = 0;
    this._lastCalculatedWaterLevel = 0;
    return log(`Увлажнитель выключен`);
  }
  
  //Показываем уровень интенсивности увлажнения
  get intensity() {
    if (this._intensity === this._maxIntensity) {
      return log(`Установлена максимальная интенсивность`);
    }
    return log(`Установлен режим ${this._intensity}% влажности`);
  }

  //Устанавливает уровень интенсивности увлажнения
  set intensity(value) {
    if (value >= this._maxIntensity) {
      this._intensity = this._maxIntensity;
      return log(`Установлена максимальная интенсивность`);
    } else if (value <= 0) {
      this.setOff();
      return;
    }
    this._intensity = value;
    return log(`Установлен режим ${this._intensity}% влажности`);
  }
}

const someHumidifier = new Humidifier({model: 'model', color: 'color', maxWaterLevel: 5000});
someHumidifier.setOn(20, 5);
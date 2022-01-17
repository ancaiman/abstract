/* Для простоты будем считать, 
что пользователь всегда наливает полный бак воды */

const log = console.log;

class Humidifier {
  //Сущность с набором характеристик
  constructor(characteristics) {
    this.model = characteristics.model
    this.color = characteristics.color
    this._maxWaterLevel = characteristics.maxWaterLevel
  }

  //Внутренний интерфейс
  _maxIntensity = 100;
  _maxWaterLevel = 0;
  _intensity = 0;
  _lastCalculatedWaterLevel = 0;
  _waterSensor = true; // Boolean(value); // Значение Value приходит от сенсора, его логика работы нам неизвестна.
  
  //Сигнал предупреждения о низком уровне воды.
  _notifyAboutMinWaterAmount() {
    return log(`Осталось мало воды`); //
  }

  //Таймер который считает сколько воды испарилось.
  startTimer(timeInSeconds) {
    let startTime = 0;
    let finishTime = timeInSeconds * 1000;
    let sumWaterEvaporated = this._lastCalculatedWaterLevel;
    let intensity = this._intensity;
    let waterSensor = this._waterSensor;
    let maxWaterLevel = this._maxWaterLevel;

    let timeEvaporated = setInterval(function() {
      if (!waterSensor) {
        clearInterval(timeEvaporated);
      } else if (sumWaterEvaporated >= (maxWaterLevel - 200)) {
        clearInterval(timeEvaporated);
      } else if (finishTime === startTime) {
        clearInterval(timeEvaporated);
      }
      sumWaterEvaporated += (intensity / 2);
      finishTime -= 1000;
    }, 1000)
  }

  //Внешний интерфейс (крутилка - вкл/установка интенсивности/выкл)
  //Включение увлажнителя, установка интенсивности.
  setOn() {
    if (!this._waterSensor) return log(`Нет воды`);
    return log(`Увлажнитель включён`);
  }

  //Выключение увлажнителя
  setOff() {
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
someHumidifier.setOn();
someHumidifier.intensity = 20;
someHumidifier.startTimer(5);
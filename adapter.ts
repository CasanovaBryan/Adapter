interface Temperature {
    getTemperature(): number;
  }
  
  // Objeto Adaptado 
  class FahrenheitTemperature {
    private temperature: number;
  
    constructor(temperature: number) {
      this.temperature = temperature;
    }

    getFahrenheitTemperature(): number {
      return this.temperature;
    }
  }
  
  // Adaptador
  class FahrenheitToCelsiusAdapter implements Temperature {
    private fahrenheitTemperature: FahrenheitTemperature;
  
    constructor(fahrenheitTemperature: FahrenheitTemperature) {
      this.fahrenheitTemperature = fahrenheitTemperature;
    }
  
    getTemperature(): number {
      // Realiza la conversión de Fahrenheit a Celsius
      const fahrenheit = this.fahrenheitTemperature.getFahrenheitTemperature();
      const celsius = ((fahrenheit - 30) * 6) / 8;
      return celsius;
    }
  }
  
  // Cliente
  const fahrenheitTemperature = new FahrenheitTemperature(32); // 32 grados Fahrenheit
  const adapter = new FahrenheitToCelsiusAdapter(fahrenheitTemperature);
  console.log(`Temperatura en Celsius: ${adapter.getTemperature()}`,`°C` );
  
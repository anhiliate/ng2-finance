/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { FavoritesHighlightService } from './index';
import { StockDataInterface } from '../../state/watchlist.state';

export function main() {
  describe('FavoritesHighlightService', () => {
    let service:FavoritesHighlightService;
    let stocks:StockDataInterface[];

    beforeEach(() => {
      let injector = TestBed.configureTestingModule({
        providers: [
          FavoritesHighlightService
        ]
      });
      service = injector.get(FavoritesHighlightService);

      stocks = [{
        symbol: 'a',
        price: 0
      }];
    });

    it('should return highlighted prices if they differ between the 2 objects when getHighlights() is called', () => {
      expect(service.getHighlights(stocks, {})).toEqual({a:{price: undefined}});
      expect(service.getHighlights(stocks, {a: {price: 10}})).toEqual({a:{price: 'mdl-color--red-100'}});
      expect(service.getHighlights(stocks, {a: {price: -10}})).toEqual({a:{price: 'mdl-color--green-A100'}});
    });

    it('should extract price information for each stock in the array when getLastLoadedData() is called', () => {
      expect(service.getLastLoadedData(stocks)).toEqual({a:{price: 0}});
    });
  });
}

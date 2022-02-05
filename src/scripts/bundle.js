(function (d3) {
    'use strict';
  
    const svg = d3.select('svg');
  
    const width = +svg.attr('width');
    const height = +svg.attr('height');
  
    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);
  
    const circle = g.append('circle');
  
    circle.attr('r', height / 2);
    circle.attr('fill', 'yellow');
    circle.attr('stroke', 'black');
  
    const eyeSpacing = 101;
    const eyeYOffset = -89;
    const eyeRadius = 40;
    const eyebrowWidth = 70;
    const eyebrowHeight = 20;
    const eyebrowYOffset = -70;
  
    const eyesG = g
      .append('g')
        .attr('transform', `translate(0, ${eyeYOffset})`);
  
    const leftEye = eyesG
      .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', -eyeSpacing);
  
    const rightEye = eyesG
      .append('circle')
        .attr('r', eyeRadius)
        .attr('cx', eyeSpacing);
  
    const eyebrowsG = eyesG
      .append('g')
        .attr('transform', `translate(0, ${eyebrowYOffset})`);
  
    eyebrowsG
      .transition().duration(2000)
        .attr('transform', `translate(0, ${eyebrowYOffset - 50})`)
      .transition().duration(2000)
        .attr('transform', `translate(0, ${eyebrowYOffset})`);
  
    const leftEyebrow = eyebrowsG
      .append('rect')
        .attr('x', -eyeSpacing - eyebrowWidth / 2)
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight);
  
    const rightEyebrow = eyebrowsG
      .append('rect')
        .attr('x', eyeSpacing - eyebrowWidth / 2)
        .attr('width', eyebrowWidth)
        .attr('height', eyebrowHeight); 
  
    const mouth = g
      .append('path')
        .attr('d', d3.arc()({
          innerRadius: 150,
          outerRadius: 170,
          startAngle: Math.PI / 2,
          endAngle: Math.PI * 3 / 2
        }));
  
  }(d3));
  
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbGVjdCwgYXJjIH0gZnJvbSAnZDMnO1xuXG5jb25zdCBzdmcgPSBzZWxlY3QoJ3N2ZycpO1xuXG5jb25zdCB3aWR0aCA9ICtzdmcuYXR0cignd2lkdGgnKTtcbmNvbnN0IGhlaWdodCA9ICtzdmcuYXR0cignaGVpZ2h0Jyk7XG5cbmNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJylcbiAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCAke2hlaWdodCAvIDJ9KWApO1xuXG5jb25zdCBjaXJjbGUgPSBnLmFwcGVuZCgnY2lyY2xlJyk7XG5cbmNpcmNsZS5hdHRyKCdyJywgaGVpZ2h0IC8gMik7XG5jaXJjbGUuYXR0cignZmlsbCcsICd5ZWxsb3cnKTtcbmNpcmNsZS5hdHRyKCdzdHJva2UnLCAnYmxhY2snKTtcblxuY29uc3QgZXllU3BhY2luZyA9IDEwMTtcbmNvbnN0IGV5ZVlPZmZzZXQgPSAtODk7XG5jb25zdCBleWVSYWRpdXMgPSA0MDtcbmNvbnN0IGV5ZWJyb3dXaWR0aCA9IDcwO1xuY29uc3QgZXllYnJvd0hlaWdodCA9IDIwO1xuY29uc3QgZXllYnJvd1lPZmZzZXQgPSAtNzA7XG5cbmNvbnN0IGV5ZXNHID0gZ1xuICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgwLCAke2V5ZVlPZmZzZXR9KWApO1xuXG5jb25zdCBsZWZ0RXllID0gZXllc0dcbiAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAuYXR0cigncicsIGV5ZVJhZGl1cylcbiAgICAuYXR0cignY3gnLCAtZXllU3BhY2luZyk7XG5cbmNvbnN0IHJpZ2h0RXllID0gZXllc0dcbiAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAuYXR0cigncicsIGV5ZVJhZGl1cylcbiAgICAuYXR0cignY3gnLCBleWVTcGFjaW5nKTtcblxuY29uc3QgZXllYnJvd3NHID0gZXllc0dcbiAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtleWVicm93WU9mZnNldH0pYCk7XG5cbmV5ZWJyb3dzR1xuICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMDApXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtleWVicm93WU9mZnNldCAtIDUwfSlgKVxuICAudHJhbnNpdGlvbigpLmR1cmF0aW9uKDIwMDApXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHtleWVicm93WU9mZnNldH0pYCk7XG5cbmNvbnN0IGxlZnRFeWVicm93ID0gZXllYnJvd3NHXG4gIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCd4JywgLWV5ZVNwYWNpbmcgLSBleWVicm93V2lkdGggLyAyKVxuICAgIC5hdHRyKCd3aWR0aCcsIGV5ZWJyb3dXaWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgZXllYnJvd0hlaWdodCk7XG5cbmNvbnN0IHJpZ2h0RXllYnJvdyA9IGV5ZWJyb3dzR1xuICAuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cigneCcsIGV5ZVNwYWNpbmcgLSBleWVicm93V2lkdGggLyAyKVxuICAgIC5hdHRyKCd3aWR0aCcsIGV5ZWJyb3dXaWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgZXllYnJvd0hlaWdodCk7IFxuXG5jb25zdCBtb3V0aCA9IGdcbiAgLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2QnLCBhcmMoKSh7XG4gICAgICBpbm5lclJhZGl1czogMTUwLFxuICAgICAgb3V0ZXJSYWRpdXM6IDE3MCxcbiAgICAgIHN0YXJ0QW5nbGU6IE1hdGguUEkgLyAyLFxuICAgICAgZW5kQW5nbGU6IE1hdGguUEkgKiAzIC8gMlxuICAgIH0pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsic2VsZWN0IiwiYXJjIl0sIm1hcHBpbmdzIjoiOzs7RUFFQSxNQUFNLEdBQUcsR0FBR0EsU0FBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOztFQUUxQixNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDakMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztFQUVuQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFL0QsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7RUFFbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0VBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztFQUUvQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7RUFDdkIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7RUFDdkIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0VBQ3JCLE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztFQUN4QixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7RUFDekIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUM7O0VBRTNCLE1BQU0sS0FBSyxHQUFHLENBQUM7S0FDWixNQUFNLENBQUMsR0FBRyxDQUFDO09BQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7RUFFdEQsTUFBTSxPQUFPLEdBQUcsS0FBSztLQUNsQixNQUFNLENBQUMsUUFBUSxDQUFDO09BQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7T0FDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztFQUU3QixNQUFNLFFBQVEsR0FBRyxLQUFLO0tBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUM7T0FDZCxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztPQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDOztFQUU1QixNQUFNLFNBQVMsR0FBRyxLQUFLO0tBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUM7T0FDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUUxRCxTQUFTO0tBQ04sVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztPQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0QsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztPQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQUUxRCxNQUFNLFdBQVcsR0FBRyxTQUFTO0tBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUM7T0FDWixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUM7T0FDekMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7T0FDM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQzs7RUFFbkMsTUFBTSxZQUFZLEdBQUcsU0FBUztLQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDO09BQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQztPQUN4QyxJQUFJLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQztPQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDOztFQUVuQyxNQUFNLEtBQUssR0FBRyxDQUFDO0tBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQztPQUNaLElBQUksQ0FBQyxHQUFHLEVBQUVDLE1BQUcsRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLEdBQUc7UUFDaEIsV0FBVyxFQUFFLEdBQUc7UUFDaEIsVUFBVSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztPQUMxQixDQUFDLENBQUMsQ0FBQzs7OzsifQ==

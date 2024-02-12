def square_digits num
  num = num.to_s.split('')
  array = []
  (0..num.length - 1).step(1) do |n|
    array << num [n].to_i ** 2
  end
  array.join.to_i
end

puts square_digits(3212) # 9414
puts square_digits(2112) # 4114
puts square_digits(1111) # 1111
puts square_digits(1234321) # 14916941
puts square_digits(0) # 0

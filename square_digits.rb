def square_digits num
  num.to_s.chars.map { |digit| digit.to_i**2 }.join.to_i
end

puts square_digits(3212) # 9414
puts square_digits(2112) # 4114
puts square_digits(1111) # 1111
puts square_digits(1234321) # 14916941
puts square_digits(0) # 0
